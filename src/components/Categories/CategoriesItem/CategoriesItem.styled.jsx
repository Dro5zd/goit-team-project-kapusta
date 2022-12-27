import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixins";
import { ReactComponent as Shadow } from "../../../assets/images/svg/shadow.svg";

import { ReactComponent as products } from "../../../assets/images/svg/expenses/products.svg";

// interface IIcon {
//     active: any
// }
export const CategoriesItemWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 84px;
  gap: 5px; */

  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
  flex-grow: 1;

  width: 93px;
  height: auto;

  text-decoration: none;
  color: ${colors.grayTitle};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  &:hover svg,
  &:focus svg {
    fill: ${colors.orange};
  }

  ${device.tablet} {
    flex-grow: 0;
    border-bottom: none;
  }
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;

export const CategoriesTotalSum = styled.p`
  /* height: 20px;
  width: 84px;
  font-size: 12px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  text-transform: uppercase; */

  color: #52555f;
  font-weight: 400;
  font-size: 12px;
  line-height: 12/14;
  text-align: center;
  letter-spacing: 0.02em;

  ${device.tablet} {
  }

  ${device.desktop} {
  }
`;
export const CategoriesIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  .category {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 56px;

    fill: ${(p) => (p.active ? `${colors.orange}` : `#071F41`)};
  }
`;

export const ShadowIcon = styled(Shadow)`
  width: 60px;
  height: 46px;
  position: absolute;
  z-index: 0;
  rect {
    fill: ${(p) =>
      p.active ? `${colors.lightOrange}` : `${colors.grayLight}`};
  }
`;

// export const CategoriesIcon = styled(products)`
//   width: 56px;
//   height: 56px;
//   fill: ${(p: IIcon) => (p.active === 'true' ? `${colors.orange}` : `#071F41`)};
//   ${device.tablet} {
//
//   }
//   ${device.desktop} {
//
//   }
//   @media screen and (min-width: 768px) {
//     width: 306.52px;
//     height: 77.69px;
//   }
//
//   @media screen and (min-width: 1280px) {
//     width: 377px;
//     height: 120px;
//   }
// `;

export const CategoriesName = styled.p`
  /* min-width: 84px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  text-transform: uppercase; */

  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 12/14;
  text-align: center;
  letter-spacing: 0.02em;

  color: #52555f;
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;
