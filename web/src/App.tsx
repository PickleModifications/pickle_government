import { useState } from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import theme from './theme'
import {GovernmentMenu} from "./components/GovernmentMenu/GovernmentMenu"
import { useLocalization } from './components/Localization/Localization';

export type Utils = {
  translate: (key: string, ...args: string[]) => string;
  banana: string;
}

function App() {
  const { translate, setLanguage } = useLocalization({
    government_title: 'Government Portal',
    legislative_branch: 'Legislative Branch',
    executive_branch: 'Executive Branch',
    judicial_branch: 'Judicial Branch',
    legislative_branch_bills: 'Congressional Bills',
    legislative_branch_members: 'Representatives',
    legislative_bill_title: "H.R. %s - %s",
    executive_branch_orders: 'Executive Orders',
    executive_branch_budget: 'State Budget',
    executive_branch_members: 'Cabinet Members',
    judicial_branch_laws: 'Civil & Criminal Laws',
    judicial_branch_cases: 'Court Docket',
    judicial_branch_lawyers: 'Licensed Attorneys',
  });
  const utils: Utils = { 
    translate: translate,
    banana: 'banana'
  };
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <GovernmentMenu utils={utils}/>
    </MantineProvider>
  )
}

export default App
