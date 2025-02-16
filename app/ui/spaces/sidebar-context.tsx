'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { createContext, useReducer } from 'react';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'


export const SidebarContext = createContext(null);
export const SidebarDispatchContext = createContext(null);

export function SidebarProvider({ children }) {
  const [sideBarSettings, dispatch] = useReducer(
    sideBarReducer,
    initialSidebar
  );

//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter()

//   const updateParams = (newParams) => {
//       const params = new URLSearchParams(searchParams);
//       params.set('sideBar', newParams);
//       replace(`${pathname}?${params?.toString()}`);
//   };



  return (
    <SidebarContext.Provider value={sideBarSettings}>
      <SidebarDispatchContext.Provider value={dispatch}>
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarContext.Provider>
  );
}

function sideBarReducer(sideBarSettings, action) {

   
  switch (action.type) {
    case 'open': {
        return {
            ...sideBarSettings,
            text: action.text,
            isOpen: true
        }
    }
    case 'close': {
        return {
            ...sideBarSettings,
            text: null,
            isOpen: false
            
        }
    }  
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialSidebar = {
    isOpen: false,
    text: null
};

// { id: 0, text: 'Philosopher’s Path', done: true },
// { id: 1, text: 'Visit the temple', done: false },
// { id: 2, text: 'Drink matcha', done: false }

