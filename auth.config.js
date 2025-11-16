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
            const isOnPostPage = nextUrl.pathname.startsWith('/post');
            
            const isOnProtectedRoute = isOnProfilePage || isOnWelcomePage || isOnGetStartedPage || isOnPostPage;
            
            if (isOnProtectedRoute && !isLoggedIn) {
                return false; // Redirect to login
            }
            
            return true;
        }
    }
};