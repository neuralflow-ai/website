// Email service utility for multiple providers
// Supports Netlify Forms, Formspree, and EmailJS

export interface EmailSubmission {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  source: 'welcome-popup' | 'contact-form' | 'newsletter';
}

// Submit to Netlify Forms (primary method for production)
export const submitToNetlifyForms = async (
  formName: string, 
  data: EmailSubmission
): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('form-name', formName);
    
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value.toString());
    });

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
    });

    return response.ok;
  } catch (error) {
    console.error('Netlify Forms submission failed:', error);
    return false;
  }
};

// Submit to Formspree (backup method)
export const submitToFormspree = async (
  formId: string, 
  data: EmailSubmission
): Promise<boolean> => {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    return response.ok;
  } catch (error) {
    console.error('Formspree submission failed:', error);
    return false;
  }
};

// Submit to EmailJS (alternative method)
export const submitToEmailJS = async (
  serviceId: string,
  templateId: string,
  data: EmailSubmission
): Promise<boolean> => {
  try {
    // Note: EmailJS requires their SDK to be installed
    // npm install @emailjs/browser
    const { send } = await import('@emailjs/browser');
    
    await send(serviceId, templateId, data as Record<string, unknown>);
    return true;
  } catch (error) {
    console.error('EmailJS submission failed:', error);
    return false;
  }
};

// Universal email submission with fallbacks
export const submitEmail = async (
  data: EmailSubmission,
  options: {
    netlifyFormName?: string;
    formspreeId?: string;
    emailJSConfig?: {
      serviceId: string;
      templateId: string;
    };
  } = {}
): Promise<{
  success: boolean;
  method: string;
  error?: string;
}> => {
  const { netlifyFormName, formspreeId, emailJSConfig } = options;

  // Try Netlify Forms first (for production)
  if (process.env.NODE_ENV === 'production' && netlifyFormName) {
    const netlifySuccess = await submitToNetlifyForms(netlifyFormName, data);
    if (netlifySuccess) {
      return { success: true, method: 'netlify' };
    }
  }

  // Fallback to Formspree
  if (formspreeId) {
    const formspreeSuccess = await submitToFormspree(formspreeId, data);
    if (formspreeSuccess) {
      return { success: true, method: 'formspree' };
    }
  }

  // Fallback to EmailJS
  if (emailJSConfig) {
    const emailJSSuccess = await submitToEmailJS(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      data
    );
    if (emailJSSuccess) {
      return { success: true, method: 'emailjs' };
    }
  }

  return { 
    success: false, 
    method: 'none',
    error: 'All email submission methods failed'
  };
};

// Configuration for different environments
export const getEmailConfig = () => {
  return {
    // Netlify Forms (automatic in production)
    netlify: {
      contactForm: 'contact',
      welcomePopup: 'welcome-popup'
    },
    
    // Formspree (backup - requires account setup)
    formspree: {
      contactFormId: process.env.REACT_APP_FORMSPREE_CONTACT_ID,
      welcomePopupId: process.env.REACT_APP_FORMSPREE_WELCOME_ID
    },
    
    // EmailJS (alternative - requires account setup)
    emailjs: {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      contactTemplateId: process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE,
      welcomeTemplateId: process.env.REACT_APP_EMAILJS_WELCOME_TEMPLATE
    }
  };
};

// Example usage:
/*
import { submitEmail, getEmailConfig } from './emailService';

const config = getEmailConfig();

await submitEmail(
  {
    email: 'user@example.com',
    name: 'John Doe',
    source: 'contact-form'
  },
  {
    netlifyFormName: config.netlify.contactForm,
    formspreeId: config.formspree.contactFormId
  }
);
*/