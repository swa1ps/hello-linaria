import React from 'react';
import { styled } from 'linaria/react';
import { css, cx } from 'linaria';

const defaultColor = 'gray';

const bar = css`
  border: 1px ${defaultColor} solid;
`;

const Icon = styled.span`
  padding: 0px 5px;
  margin-left: 5px;
  color: red;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  color: ${defaultColor};
  border: 1px solid ${defaultColor};

  &:hover ${Icon}{
    color: blue;
  }
`;

const SuperStyledButton = styled(StyledButton)`
  color: red;
`;

export default function Button({ isFoo, children }) {
  return (
    <SuperStyledButton>
      {children}
      <Icon className={cx(isFoo && bar)}>Icon</Icon>
    </SuperStyledButton>
  );
}
