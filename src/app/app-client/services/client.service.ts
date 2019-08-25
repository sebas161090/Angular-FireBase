import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from '../Interfaces/client';


@Injectable()
export class ClientService {
    constructor(private firestore: AngularFirestore) {}

    // crear cliente
    create(data: Client) {
        return this.firestore.collection('client').add(data);
    }

    // Obtiene un cliente
    find(clientId: string) {
        return this.firestore
            .collection('client')
            .doc(clientId)
            .snapshotChanges();
    }

    // Obtiene todos los cliente
    all() {
        return this.firestore
            .collection('client')
            .snapshotChanges()
            .map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data } as Client;
                });
            });
    }

    /* update(clientId: string, data: UpdateClientDto) {
        return this.firestore
            .collection('clients')
            .doc(clientId)
            .set(data);
    } */
 
    delete(clientId: string) {
        return this.firestore
            .collection('client')
            .doc(clientId)
            .delete();
    }
}
