import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  upload_image(url:string, files:File[], name:string){
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      let formData = new FormData()

      for(let i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name)
      }

      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            resolve(JSON.parse(xhr.response))
          }else{
            reject(xhr.response)
          }
        }
      }

      xhr.open('PUT', url, true)
      xhr.send(formData)
    })
  }
}
