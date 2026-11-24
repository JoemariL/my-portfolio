import { FiTerminal } from 'react-icons/fi';
import {
  SiAmazonaws,
  SiAnsible,
  SiCloudflare,
  SiDocker,
  SiElasticsearch,
  SiF5,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiInsomnia,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSplunk,
  SiSqlite,
  SiTerraform,
  SiWindows,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Network & web security',
    skills: [
      { name: 'F5 Networks & ASM', Icon: SiF5 },
      { name: 'Cloudflare', Icon: SiCloudflare },
      { name: 'Nginx', Icon: SiNginx },
    ],
  },
  {
    title: 'Cloud platforms',
    skills: [
      { name: 'AWS', Icon: SiAmazonaws },
      { name: 'Google Cloud', Icon: SiGooglecloud },
      { name: 'Azure', Icon: SiMicrosoftazure },
    ],
  },
  {
    title: 'DevOps & automation',
    skills: [
      { name: 'Terraform', Icon: SiTerraform },
      { name: 'Ansible', Icon: SiAnsible },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Jenkins', Icon: SiJenkins },
    ],
  },
  {
    title: 'Logging & observability',
    skills: [
      { name: 'Elasticsearch', Icon: SiElasticsearch },
      { name: 'Splunk', Icon: SiSplunk },
    ],
  },
  {
    title: 'Programming & web development',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React.js', Icon: SiReact },
      { name: 'Node.js', Icon: SiNodedotjs },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'SQLite', Icon: SiSqlite },
      { name: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    title: 'Operating systems & shells',
    skills: [
      { name: 'Windows', Icon: SiWindows },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Bash', Icon: FiTerminal },
      { name: 'Windows Command Prompt', Icon: FiTerminal },
    ],
  },
  {
    title: 'Version control & collaboration',
    skills: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'GitLab', Icon: SiGitlab },
    ],
  },
  {
    title: 'API testing',
    skills: [
      { name: 'Postman', Icon: SiPostman },
      { name: 'Insomnia', Icon: SiInsomnia },
    ],
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">My Skills</h2>
      <div className="mt-6 grid items-start gap-x-12 gap-y-8 md:grid-cols-2">
        {skillGroups.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <ul className="mt-2 divide-y divide-divider border-y border-divider">
              {skills.map(({ name, Icon }) => (
                <li key={name} className="flex items-center gap-3 py-2 text-base text-muted">
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

