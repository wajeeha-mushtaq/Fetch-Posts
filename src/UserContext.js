import { createContext } from "react";

export const UserContext = createContext({userId:'', name: '', email: '', password: '', auth: false});
