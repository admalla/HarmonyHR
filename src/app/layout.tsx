"use client"

import "./globals.css";
import RefreshCheck from "@/widgets/refreshCheck/RefreshCheck";
import React, {ReactNode } from "react";
import {ApolloWrapper} from "@/app/ApolloWrapper";

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
    <body>
    <ApolloWrapper>
      <RefreshCheck>
        {children}
      </RefreshCheck>
    </ApolloWrapper>
    </body>
    </html>
  );
}
