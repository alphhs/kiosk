import { Link } from '@tanstack/react-router';
import { Text, TextConfig } from '../../components';

// import {
//   ArrowRightOutlined,
//   CaretRightOutlined,
//   DoubleRightOutlined,
//   RightCircleOutlined,
//   RightOutlined,
// } from '@ant-design/icons';
// import Link from '@/components/link';
// import { CustomText } from '@/lib/widgets/utils/CustomText';
// import { TextConfig } from '@/lib/widgets/utils/types';

const SingleItem = ({ route, textConfig }: { route: RouteType; textConfig?: TextConfig }) => {
  if (route.path)
    return (
      <Link to={route.path}>
        {route.icon && (
          <img
            src={route.icon}
            alt={route.path}
            style={{ width: textConfig?.fontSize || 14, height: textConfig?.fontSize || 14 }}
          />
        )}
        <Text content={{ ...textConfig, text: route.breadcrumbName }} noFontWeight sameLineHeight />
      </Link>
    );

  return (
    <>
      {route.icon && (
        <img
          src={route.icon}
          className="icon"
          alt={route.path}
          style={{ width: textConfig?.fontSize || 14, height: textConfig?.fontSize || 14 }}
        />
      )}
      <Text content={{ ...textConfig, text: route.breadcrumbName }} noFontWeight sameLineHeight />
    </>
  );
};

export const BreadcrumbBlock = ({ routes = [], textConfig }: BreadcrumbBlockProps) => {
  if (routes.length === 0) return null;
  // const Separator = separatorIcons[separate] || ArrowRightOutlined;

  return (
    <div className="breadcrumbs">
      <ul>
        {routes.map((route, idx) => (
          <li key={idx}>
            <SingleItem route={route} textConfig={textConfig} />
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <Breadcrumb
  //     className={styles.breadcrumb}
  //     separator={<Separator className={styles.separator} style={{ fontSize: (parseInt(String(fontSize), 10) * 2) / 3 }} />}
  //   >
  //     {routes?.map((route: RouteType, idx: number) => (
  //       <Breadcrumb.Item key={idx} className={styles.breadcrumbItem}>
  //         <SingleItem route={route} textConfig={textConfig} />
  //       </Breadcrumb.Item>
  //     ))}
  //   </Breadcrumb>
  // );
};

export type BreadcrumbBlockProps = {
  routes: Array<RouteType>;
  // separate: SeparateType;
  textConfig?: TextConfig;
};

export type RouteType = {
  path?: string;
  icon?: string;
  breadcrumbName?: string;
};

// export type SeparateType =
//   | 'ArrowRightOutlined'
//   | 'CaretRightOutlined'
//   | 'DoubleRightOutlined'
//   | 'RightCircleOutlined'
//   | 'RightOutlined';
//
// const separatorIcons = {
//   ArrowRightOutlined,
//   CaretRightOutlined,
//   DoubleRightOutlined,
//   RightCircleOutlined,
//   RightOutlined,
// };
