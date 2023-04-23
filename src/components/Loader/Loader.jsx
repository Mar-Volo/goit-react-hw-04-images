import { Blocks } from 'react-loader-spinner';

import { SpinerBox, Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <SpinerBox>
      <Spiner>
        <Blocks
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </Spiner>
    </SpinerBox>
  );
};
