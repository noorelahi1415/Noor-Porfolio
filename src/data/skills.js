import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJenkins,
} from "react-icons/fa";
import {
  SiLinux,
  SiKubernetes,
  SiGithub,
  SiGithubactions,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiHelm,
  SiGnubash,
  SiPython,
  SiCplusplus,
  SiOdoo,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, type: "component" },
  { name: "CSS", icon: FaCss3Alt, type: "component" },
  { name: "Linux", icon: SiLinux, type: "component" },
  { name: "Docker", icon: FaDocker, type: "component" },
  { name: "Kubernetes", icon: SiKubernetes, type: "component" },
  { name: "Git", icon: FaGitAlt, type: "component" },
  { name: "GitHub", icon: SiGithub, type: "component" },
  { name: "GitHub Actions", icon: SiGithubactions, type: "component" },
  { name: "Jenkins", icon: FaJenkins, type: "component" },
  { name: "Prometheus", icon: SiPrometheus, type: "component" },
  { name: "Grafana", icon: SiGrafana, type: "component" },
  { name: "Helm", icon: SiHelm, type: "component" },
  { name: "ArgoCD", icon: SiArgo, type: "component" },
  { name: "AWS", icon: FaAws, type: "component" },
  { name: "Shell Scripting", icon: SiGnubash, type: "component" },
  { name: "Python", icon: SiPython, type: "component" },
  { name: "C++", icon: SiCplusplus, type: "component" },
  { name: "Odoo", icon: SiOdoo, type: "component" },
];

export default skills;