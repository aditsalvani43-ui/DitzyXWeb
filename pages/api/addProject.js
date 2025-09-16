import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nama, description } = req.body;
    const filePath = path.join(process.cwd(), 'data', 'projects.json');
    const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (projects[nama]) {
      return res.status(400).json({ success: false, message: 'Nama sudah ada' });
    }

    projects[nama] = { title: nama, description };
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));

    return res.status(200).json({ success: true });
  }

  res.status(405).json({ message: 'Method not allowed' });
        }
