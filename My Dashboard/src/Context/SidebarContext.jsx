import { createContext , useState } from "react";
import {PropTypes} from "prop-types";

export const sidebarContext = createContext({});

export const sidebarProvider = ({children}) => {
    const [isSidebarOpen , setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
      };
    
      const closeSidebar = () => {
        setSidebarOpen(false);
      };
    
      return (
        <SidebarContext.Provider
          value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
          }}
        >
          {children}
        </SidebarContext.Provider>
      );
    };
    
    SidebarProvider.propTypes = {
      children: PropTypes.node,
    };