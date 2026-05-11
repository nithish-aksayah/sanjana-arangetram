/**
 * Service to handle Google Sheets integration via Google Apps Script Web App
 */

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

/**
 * Submits data to Google Sheets
 * 
 * 
 * @param {Object} data - The data payload to send
 * @returns {Promise<Response>}
 */
export const submitToGoogleSheets = async (data) => {
  if (!GOOGLE_SCRIPT_URL) {
    const errorMsg = "Google Sheets Script URL is not defined in environment variables. Please check your production configuration.";
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    });
    
    return response;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
};
