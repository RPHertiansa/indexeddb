const productData = [{
    "id": 1,
    "kode": "K-01",
    "nama": "Sate Ayam",
    "harga": 16000,
    "is_ready": true,
    "gambar": "sate-ayam.jpg"
  },
  {
    "id": 2,
    "kode": "K-02",
    "nama": "Nasi Goreng Telur",
    "harga": 14000,
    "is_ready": true,
    "gambar": "nasi-goreng-telor.jpg"
  },
  {
    "id": 3,
    "kode": "K-03",
    "nama": "Nasi Rames",
    "harga": 12000,
    "is_ready": true,
    "gambar": "nasi-rames.jpg"
  },
  {
    "id": 4,
    "kode": "K-04",
    "nama": "Mie Ayam Bakso",
    "harga": 14000,
    "is_ready": true,
    "gambar": "mie-ayam-bakso.jpg"
  },
  {
    "id": 5,
    "kode": "K-05",
    "nama": "Mie Goreng",
    "harga": 13000,
    "is_ready": true,
    "gambar": "mie-goreng.jpg"
  },
  {
    "id": 6,
    "kode": "K-06",
    "nama": "Bakso",
    "harga": 10000,
    "is_ready": true,
    "gambar": "bakso.jpg"
  },
  {
    "id": 7,
    "kode": "K-07",
    "nama": "Pangsit 6 pcs",
    "harga": 5000,
    "is_ready": true,
    "gambar": "pangsit.jpg"
  },
  {
    "id": 8,
    "kode": "K-08",
    "nama": "Kentang Goreng",
    "harga": 5000,
    "is_ready": true,
    "gambar": "kentang-goreng.jpg"
  },
  {
    "id": 9,
    "kode": "K-09",
    "nama": "Lontong Opor Ayam",
    "harga": 18000,
    "is_ready": true,
    "gambar": "lontong-opor-ayam.jpg"
  }]

const dbButton = document.getElementById('btnCreate')
dbButton.addEventListener('click', createDB)

// const btnGet = document.getElementById('btnGet')
// btnGet.addEventListener('click', getItem)

// const btnInsert = document.getElementById('btnInsert')
// btnInsert.addEventListener('click', insertItem)

// const btnUpdate = document.getElementById('btnUpdate')
// btnUpdate.addEventListener('click', updateItem)

// const btnDelete = document.getElementById('btnDelete')
// btnDelete.addEventListener('click', deleteItem)

let db = null
function createDB() {
    const dbName = document.getElementById("txtDB").value
    const dbVersion = document.getElementById('txtVersion').value

    const request = indexedDB.open(dbName, dbVersion)

    request.onupgradeneeded = e => {
        db = e.target.result
        const store = db.createObjectStore('product', {keyPath:'id'})
        store.transaction.oncomplete = e => {
            console.log('store created')
        }
        console.log('upgrade is called')
    }

    request.onsuccess = e => {
        insertItem(productData)
        console.log('success')
    }

    request.onerror = e => {
        console.log("error")
    }

}   

function getItem() {
    const dbName = document.getElementById("txtDB").value
    const dbVersion = document.getElementById('txtVersion').value

    const request = indexedDB.open(dbName, dbVersion)

    request.onupgradeneeded = e => {
        console.log('upgrade is called')
    }

    request.onsuccess = e => {
        console.log('success')
    }

    request.onerror = e => {
        console.log("error")
    }

} 

function insertItem(products) {

    if (db) {
        const insert = db.transaction('product', 'readwrite')
        const store = insert.objectStore('product')

        insert.onerror = e => {
            console.log('error')
        }

        store.transaction.oncomplete = e => {
            console.log('success')
        }

        products.forEach(product => {
            let request = store.add(product)

            request.onerror = e => {
                console.log('insert error')
            }

            request.onsuccess = e => {
                console.log('insert success')
            }

        });

        
    }
    // const dbName = document.getElementById("txtDB").value
    // const dbVersion = document.getElementById('txtVersion').value

    // const request = indexedDB.open(dbName, dbVersion)

    // request.onupgradeneeded = e => {
    //     console.log('upgrade is called')
    // }

    // request.onsuccess = e => {
    //     console.log('success')
    // }

    // request.onerror = e => {
    //     console.log("error")
    // }

} 

function updateItem() {
    const dbName = document.getElementById("txtDB").value
    const dbVersion = document.getElementById('txtVersion').value

    const request = indexedDB.open(dbName, dbVersion)

    request.onupgradeneeded = e => {
        console.log('upgrade is called')
    }

    request.onsuccess = e => {
        console.log('success')
    }

    request.onerror = e => {
        console.log("error")
    }

} 

function deleteItem() {
    const dbName = document.getElementById("txtDB").value
    const dbVersion = document.getElementById('txtVersion').value

    const request = indexedDB.open(dbName, dbVersion)

    request.onupgradeneeded = e => {
        console.log('upgrade is called')
    }

    request.onsuccess = e => {
        console.log('success')
    }

    request.onerror = e => {
        console.log("error")
    }

} 