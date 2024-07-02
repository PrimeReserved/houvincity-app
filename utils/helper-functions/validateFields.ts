// Generic validation function
export function validateFields<T extends object>(data: T, requiredFields: { [K in keyof T]?: string }): string | null {
    for (const [key, value] of Object.entries(data)) {
      if (!value && key in requiredFields) {
        return `${requiredFields[key as keyof T]} is required`;
      }
    }
    return null;
  }