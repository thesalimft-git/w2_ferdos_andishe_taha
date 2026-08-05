import FaqSection from "./partials/FaqSection";
import { TopMenu } from "./partials/TopMenu";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="container">
      <TopMenu />
      <div>{children}</div>
      <FaqSection />
    </div>
  );
}