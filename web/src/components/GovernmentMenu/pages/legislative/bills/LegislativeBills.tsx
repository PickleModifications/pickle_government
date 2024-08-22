import { Group, Center, Container, Text } from '@mantine/core';
import { Utils } from "../../../../../App";
import { TableScrollArea } from '../../../../TableScrollArea/TableScrollArea';
import { Link } from '../../../../Link/Link';

export function LegislativeBills({utils} : {utils: Utils}) {
    return(
        <Container style={{flexGrow: 1, flexDirection: "column"}} p={10} m={0}>
            <TableScrollArea data={{
                caption: "List of Congressional Bills",
                head: ['ID', 'Name', 'Description', ''],
                body: [
                    ["H.R. 1000", "Freedom Restoration Act", 'This act brings lots of freedom to many people for various things.', <Link>View</Link>],
                    ["H.R. 1001", "Equality Act", 'This act promotes equality and non-discrimination in various aspects of society.', <Link>View</Link>],
                    ["H.R. 1002", "Climate Change Mitigation Act", 'This act aims to address the challenges of climate change and reduce greenhouse gas emissions.', <Link>View</Link>],
                    ["H.R. 1003", "Education Reform Act", 'This act proposes reforms to improve the education system and enhance student outcomes.', <Link>View</Link>],
                    ["H.R. 1004", "Healthcare Access Act", 'This act seeks to improve access to affordable healthcare for all citizens.', <Link>View</Link>],
                    ["H.R. 1005", "Infrastructure Investment Act", 'This act focuses on investing in infrastructure projects to stimulate economic growth.', <Link>View</Link>],
                    ["H.R. 1006", "Criminal Justice Reform Act", 'This act aims to reform the criminal justice system and promote fairness and rehabilitation.', <Link>View</Link>],
                    ["H.R. 1007", "Worker Protection Act", 'This act aims to protect workers rights and ensure safe working conditions.', <Link>View</Link>],
                    ["H.R. 1008", "Tax Reform Act", 'This act proposes reforms to the tax system to promote fairness and economic growth.', <Link>View</Link>],
                    ["H.R. 1009", "Immigration Reform Act", 'This act seeks to reform the immigration system and provide a pathway to citizenship for undocumented immigrants.', <Link>View</Link>],
                    ["H.R. 1010", "Gun Control Act", 'This act proposes measures to enhance gun control and reduce gun violence.', <Link>View</Link>],
                    ["H.R. 1011", "Veterans Support Act", 'This act aims to provide support and resources for veterans and their families.', <Link>View</Link>],
                    ["H.R. 1012", "Consumer Protection Act", 'This act focuses on protecting consumers from fraudulent practices and ensuring fair business practices.', <Link>View</Link>],
                    ["H.R. 1013", "Housing Affordability Act", 'This act aims to address the issue of housing affordability and provide assistance to low-income individuals and families.', <Link>View</Link>],
                    ["H.R. 1014", "Environmental Conservation Act", 'This act focuses on conserving and protecting the environment through various measures.', <Link>View</Link>],
                    ["H.R. 1015", "Privacy Protection Act", 'This act aims to protect individuals privacy rights and regulate the collection and use of personal data.', <Link>View</Link>],
                    ["H.R. 1016", "Economic Stimulus Act", 'This act proposes measures to stimulate economic growth and create job opportunities.', <Link>View</Link>],
                    ["H.R. 1017", "Youth Empowerment Act", 'This act focuses on empowering and supporting the youth through various programs and initiatives.', <Link>View</Link>],
                    ["H.R. 1018", "Animal Welfare Act", 'This act aims to protect and promote the welfare of animals through regulations and enforcement.', <Link>View</Link>],
                    ["H.R. 1019", "Cybersecurity Enhancement Act", 'This act proposes measures to enhance cybersecurity and protect against cyber threats.', <Link>View</Link>],
                    ["H.R. 1020", "Disaster Relief Act", 'This act focuses on providing relief and assistance to communities affected by natural disasters.', <Link>View</Link>],
                ],
            }}/>
        </Container>
    )
}