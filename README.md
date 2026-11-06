# VitrinaChat

Catálogo digital con pedido directo por WhatsApp. Proyecto colaborativo (Comunidad Talento Digital).

**Stack:** Django REST Framework · PostgreSQL · React + Tailwind CSS · Docker Compose

## Requisitos
- Git
- Docker (Docker Desktop en Windows/macOS; Docker Engine en Linux)

## Uso
```bash
git clone https://github.com/DPExRC/VitrinaChat.git
cd VitrinaChat
docker compose up --build
```

| Servicio | URL |
|---|---|
| Frontend | http://localhost:5173 |
| API | http://localhost:8000/api/health/ |
| Admin Django | http://localhost:8000/admin/ |

## Comandos frecuentes
```bash
docker compose exec backend python manage.py createsuperuser
docker compose exec backend python manage.py makemigrations
docker compose down        # detener
docker compose down -v     # detener y borrar la base de datos
```

## Flujo de trabajo
Ver CONTRIBUTING.md