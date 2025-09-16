import { useRouter } from 'next/router';
import projects from '../../data/projects.json';

export default function ProyekPage() {
  const router = useRouter();
  const { nama } = router.query;

  if (!nama || !projects[nama]) return <p>Proyek tidak ditemukan</p>;

  const proyek = projects[nama];

  return (
    <div style={{ padding: 20 }}>
      <h1>{proyek.title}</h1>
      <p>{proyek.description}</p>
    </div>
  );
  }
