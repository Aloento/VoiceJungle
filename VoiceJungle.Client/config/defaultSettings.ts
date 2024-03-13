import { ProLayoutProps } from "@ant-design/pro-components";

const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: "light",
  colorPrimary: "#722ED1",
  layout: "side",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  title: "VoiceJungle",
  pwa: true,
  logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  token: {},
  splitMenus: false,
  siderMenuType: "sub",
};

export default Settings;
