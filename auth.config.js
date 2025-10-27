export const authConfig = {
    providers: [],  
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signUp/logIn"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnProfilePage = nextUrl.pathname.startsWith('/profile');
            const isOnWelcomePage = nextUrl.pathname.startsWith('/welcome');
            const isOnGetStartedPage = nextUrl.pathname.startsWith('/getstarted');
            
            const isOnProtectedRoute = isOnProfilePage || isOnWelcomePage || isOnGetStartedPage;
            
            if (isOnProtectedRoute && !isLoggedIn) {
                return false; // Redirect to login
            }
            
            return true;
        }
    }
};