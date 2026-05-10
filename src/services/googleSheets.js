/**
 * Service to handle Google Sheets integration via Google Apps Script Web App
 */

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

/**
 * Submits data to Google Sheets
 * @param {Object} data - The data payload to send
 * @returns {Promise<Response>}
 */
export const submitToGoogleSheets = async (data) => {
  if (!GOOGLE_SCRIPT_URL) {
    console.error("Google Sheets Script URL is not defined in environment variables.");
    return;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script redirects
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    return response;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
};
