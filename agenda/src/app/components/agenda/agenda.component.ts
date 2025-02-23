import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';// ✅ Importa el servicio
/* import { HttpClient } from '@angular/common/http'; */


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent implements OnInit {
  contactos: Contact[] = [];
  nuevoContacto: Contact = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  };

  // ✅ INYECTA EL SERVICIO EN EL CONSTRUCTOR
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts(); // ✅ Cargar contactos al iniciar
  }

  // ✅ ESTE MÉTODO CARGA LOS CONTACTOS DESDE EL BACKEND
  loadContacts() {
    this.contactService.getContacts().subscribe((data) => {
      this.contactos = data;
    });
  }

  // ✅ AHORA contactService ESTÁ DISPONIBLE
  agregarContacto() {
    this.contactService.createContact(this.nuevoContacto).subscribe(() => {
      this.loadContacts(); // Recargar lista después de agregar
      this.vaciarContacto();
    });
  }

  eliminarContacto(index: number) {
    this.contactos.splice(index, 1);
  }

  editarContacto(contacto: Contact) {
    this.nuevoContacto = { ...contacto };
  }

  vaciarContacto() {
    this.nuevoContacto = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
    };
  }
}
