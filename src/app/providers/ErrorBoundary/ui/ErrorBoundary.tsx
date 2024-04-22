import { ErrorPage } from "pages/ErrorPage";
import React, { ErrorInfo, Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";


interface ErrorBoundaryProps {
   children: React.ReactNode
}

interface ErrorBoundaryState {
   hasError: boolean
}
class ErrorBoundary extends React.Component <ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
     super(props);
     this.state = { hasError: false };
   }
 
   static getDerivedStateFromError(error: Error) {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }
 
   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
     console.log(error, errorInfo);
   }
 
   render() {
      const { hasError } = this.state;
      const { children } = this.props;
     if (hasError) {
       return (
        <Suspense fallback={<PageLoader/>}>
          <ErrorPage/>
        </Suspense>
       )
     }
 
     return children; 
   }
 }

export default ErrorBoundary