"use client";

import {Crisp} from "crisp-sdk-web";
import { useEffect } from 'react';

export const CrispChat = () => {
  useEffect(()=> {
    Crisp.configure("94900089-7b38-41d9-b434-b72c6499bc96");
  },[]);

  return null;
};


