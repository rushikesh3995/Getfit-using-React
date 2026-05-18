import { createContext, useState } from "react";

export const SubscriptionContext = createContext();

function SubscriptionProvider({ children }) {

  const [activePlan, setActivePlan] = useState(null);

  return (
    <SubscriptionContext.Provider
      value={{
        activePlan,
        setActivePlan,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export default SubscriptionProvider;