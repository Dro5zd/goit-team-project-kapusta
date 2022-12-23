import styled from "styled-components";
import { colors } from "../../utils/colors";
import { ReactComponent as Delete } from "../../assets/images/svg/delete.svg";
import {device} from '../../utils/mixins';

export const TableBal = styled.table`
  width: 624px;
  margin-top: 48px;
  position: relative;
  border-collapse: collapse;
  display: none;
  flex-direction: column;

  th {
    height: 38px;
    padding: 5px;
    background: ${colors.grayBg};
    border: none;
    //border-bottom: 2px solid #f5f6fb;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    border-collapse: collapse;
  }

  tr th:first-child {
    border-radius: 16px 0 0 0;
  }

  tr th:last-child {
    border-radius: 0 16px 0 0;
  }

  thead {
    justify-content: center;

    tr {
      justify-content: center;
      display: flex;

      th {
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 4);
        display: flex;
      }
    }
  }

  tbody {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 344px;
    border: 2px solid ${colors.grayBg};
    border-top: none;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.grayBg};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.orange};
      border-radius: 8px;
    }

    tr {
      justify-content: center;
      display: flex;

      td {
        position: relative;
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 4);
        display: flex;
        height: 40px;
        border-bottom: 2px solid ${colors.grayBg};
      }
    }
  }

  tr td:first-child {
    border-left: 2px solid ${colors.grayBg};
  }

  tr td:last-child {
    padding-right: 50px;
    border-right: 2px solid ${colors.grayBg};
  }

  ${device.tablet} {
    display: flex;
  }
`;

export const DeleteIcon = styled(Delete)`
  position: absolute;
  top: 12px;
  right: 32px;
`;