function Student(inDo, vietNam, name, tuition) {
  inDo = document.getElementById('in-Do').value
  vietNam = document.getElementById('viet-Nam').value
  this.name = name
  this.tuition = tuition * 1
  this.disCount = (vietNam * 100000 - inDo * 50000)
  this.result = this.tuition - this.disCount
}