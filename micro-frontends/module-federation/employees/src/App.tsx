import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import EmployeeList from "./components/EmployeeList";


const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <EmployeeList />
  </QueryClientProvider>
);

export default App;
