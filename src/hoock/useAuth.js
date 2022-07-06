import { useContext } from "react";
import {AuthContext, authContext} from "../hoc/AuthProvider";

export function useAuth() {
  return useContext(AuthContext)
}
