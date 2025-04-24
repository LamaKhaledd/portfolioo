import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AuthHeader from './auth-header/auth-header';
import { Welcome } from '@/app/[locale]/dashboard/_lib/components/welcome/welcome';
import ProfileTabs from '@/app/[locale]/dashboard/_lib/components/profile/profile';
import UserProjects from '@/app/[locale]/projects/_lib/components/user-projects/user-projects';
import ContactMe from '@/app/[locale]/contact/_lib/components/contact-me';
import ExperienceAndStudy from '@/app/[locale]/experience/experience';
import CheckOutSection from '@/app/[locale]/dashboard/_lib/components/cv/check-out';
import CV from '@/app/[locale]/dashboard/_lib/components/cv/cv';

const Layout=()=> {
  return (
    <AppShell>
      <AppShell.Header>
        <AuthHeader />
      </AppShell.Header>
      <Welcome />
      <ProfileTabs/>
      <UserProjects/>
      <ExperienceAndStudy/>
      <CheckOutSection/>
      <CV/>
      <ContactMe/>
    </AppShell>
  );
}
export default Layout;