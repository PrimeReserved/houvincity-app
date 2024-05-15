 // Reset function
 export default function resetError (setError: (error: Error | null) => void) {
    try {
      // Reset application state here
      setError(null);
      // reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error occurred during reset:', error);
    }
  }