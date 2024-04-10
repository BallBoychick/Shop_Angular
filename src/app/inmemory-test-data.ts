import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InmemoryTestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: 11, name: 'Spring Boot by Krishn', category: 'Spring' },
      { id: 12, name: 'Java Expert by James', category: 'Java' }
    ];
    let writerDetails = [
      { id: '100', name: 'Krishn', city: 'Varanasi' },
      { id: '101', name: 'James', city: 'Mumbai' }
    ];
    return { books: bookDetails, writers: writerDetails };
  }
} 