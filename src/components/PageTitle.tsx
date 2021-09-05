import { Helmet } from 'react-helmet-async';
import { FunctionComponent } from 'react';

// TODO 페이지명을 정할 필요가 있어보입니다.
// Helmet: 헤더엘리먼트를 변경하기 쉽게 해주는 라이브러리

/**
 * 페이지마다 타이틀 변경을 위해 사용
 *
 * @param title 해당 페이지 타이틀
 * @constructor Wooseok
 */
const PageTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | SEMI</title>
    </Helmet>
  );
};

export default PageTitle;
