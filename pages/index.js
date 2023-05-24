import Image from "next/image";
import { Inter } from "next/font/google";
import PageWrapperUse from "@/components/shared/PageWrapper";
import AppPostIndex from "@/components/layout/appPostIndex";
import AppProject from "@/components/layout/appProject";
import AppCustumer from "@/components/layout/appCustumer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageWrapperUse>
      <AppPostIndex />
      <AppProject />
      <AppCustumer />
    </PageWrapperUse>
  );
}
