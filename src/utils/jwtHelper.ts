function urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    const b = atob(output);
    return decodeURIComponent(encodeURIComponent(b));
}

function decodeToken(token) {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
    }

    const decoded = urlBase64Decode(parts[1]);
    if (!decoded) {
        throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
}

export function getTokenExpirationDate(token) {
    const decoded = decodeToken(token);

    if (typeof decoded.exp === 'undefined') {
        return null;
    }

    const d = new Date(0); // The 0 here is the key, which sets the date to the epoch
    d.setUTCSeconds(decoded.exp);

    return d;
}

export function isTokenExpired(token, offsetSeconds) {
    const d = getTokenExpirationDate(token);
    const offset = offsetSeconds || 0;
    if (d === null) {
        return false;
    }

    // Token expired?
    return !(d.valueOf() > new Date().valueOf() + offset * 1000);
}