"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TestSupabase() {

  useEffect(() => {
    console.log("Component Mounted 🚀");

    const testConnection = async () => {
      const { data, error } = await supabase
        .from("test")
        .select("*");

      console.log("Response:", data, error);
    };

    testConnection();
  }, []);

  return <div style={{color: "red"}}>Testing Supabase...</div>;
}
