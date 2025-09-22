export const statusCodes = {
    // Success responses
    OK: { code: 200, message: "OK - The request was successful." },
    CREATED: { code: 201, message: "Created - Resource successfully created." },
    ACCEPTED: { code: 202, message: "Accepted - Request accepted but not yet processed." },
  
    // Redirection messages
    MOVED_PERMANENTLY: { code: 301, message: "Moved Permanently - Resource moved to a new URL." },
    FOUND: { code: 302, message: "Found - Resource temporarily moved to another URL." },
  
    // Client errors
    BAD_REQUEST: { code: 400, message: "Bad Request - The request is malformed." },
    UNAUTHORIZED: { code: 401, message: "Unauthorized - Authentication is required." },
    FORBIDDEN: { code: 403, message: "Forbidden - You do not have access." },
    NOT_FOUND: { code: 404, message: "Not Found - The resource does not exist." },
    METHOD_NOT_ALLOWED: { code: 405, message: "Method Not Allowed - HTTP method not supported." },
  
    // Server errors
    INTERNAL_SERVER_ERROR: { code: 500, message: "Internal Server Error - Something went wrong on the server." },
    NOT_IMPLEMENTED: { code: 501, message: "Not Implemented - Server does not support this functionality." },
    BAD_GATEWAY: { code: 502, message: "Bad Gateway - Invalid response from upstream server." },
    SERVICE_UNAVAILABLE: { code: 503, message: "Service Unavailable - Server is temporarily overloaded or down." }
  };
  