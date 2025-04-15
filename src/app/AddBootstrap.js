//  AddBootstrap.js
"use client";
import { useEffect } from "react";

export default function AddBootstrap()
{

    useEffect(() => {
        // Dynamically import Bootstrap JS only in the client-side
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
        
      }, []);
    
    return null;
}