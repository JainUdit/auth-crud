import styled from '@emotion/styled';
import { Tabs } from "antd";

export const StyledPageHeaderWrapper = styled('div')`
    padding: 24px;
    background-color: #f5f5f5;
`

export const StyledTabsWrapper = styled(Tabs)`
    .ant-tabs-nav-wrap {
        width: 100%;
        justify-content: center;
    }
`

export const StyledModal = styled('div')`
    display: flex;
    flex-direction: column;
`

export const StyledAddButtonWrapper = styled('div')`
    display: flex;
    justify-content: center;
`

export const NoRouteFoundDiv = styled('div')`
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 120px;
    .image-contain {
        width: 100%;
        height: 200px;
    }
    p {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 600;
    }
`;