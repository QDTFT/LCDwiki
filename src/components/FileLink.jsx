import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const iconMap = {
  pdf: '/icons/pdf.svg',
  zip: '/icons/zip.svg',
  xls: '/icons/xls.svg',
  rar: '/icons/rar.svg',
  txt: '/icons/txt.svg',
  default: '/icons/file.svg',
};

export default function FileLink({ href, children, ext }) {
  // 自动识别后缀，或手动指定 ext
  const fileExt = ext || href?.split('.').pop()?.toLowerCase();
  const icon = iconMap[fileExt] || iconMap.default;

  return (
    <a
      href={useBaseUrl(href)}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        textDecoration: 'none',
        color: 'var(--ifm-color-primary)'
      }}
    >
      <img
        src={useBaseUrl(icon)}
        alt={fileExt}
        style={{ width: '16px', height: '16px' }}
      />
      <span>{children}</span>
    </a>
  );
}