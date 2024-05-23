import { UserButton } from "@clerk/nextjs";
const DashboardPage = () => {
  return (
    <div>
      <p>DashBoard Page Protected</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
