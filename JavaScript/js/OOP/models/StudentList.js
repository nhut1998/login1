function StudentList () {
  this.array = [] // attribute: thuộc tính
  this.addToArray = function (student) { // method: phương thức
    this.array.push(student)
  }
  this.removeById = function (studentID) {
    var arrayRemoved = this.array.filter(function (student) {
      return student.studentID !== studentID // return điều kiện lọc
    })
    this.array = arrayRemoved
  }
  this.getById = function (studentID) {
    var studentFound = this.array.find(function (student) {
      return student.studentID === studentID
    })
    return studentFound
  }
  this.findIndexById = function (studentID) {
    return this.array.findIndex(function (stu) {
      return stu.studentID === studentID
    })
  }
  this.updateStudent = function (student) {
    var idxFound = this.findIndexById(student.studentID)
    if (~idxFound) this.array[idxFound] = student // ~ bù 2 --> check >= 1 --> true, 0 --> 
    // nếu không tìm thấy idxFound = -1 --> ~idxFound = 0 --> false
  }
  this.myFilter = function (arr, cbFn) {
    var filtered = []
    for (i = 0; i < arr.length; i++) {
      var isValid = cbFn(arr[i], i, arr)
      if (isValid) { // cbFn ---> nó sẽ return ra true hoặc false
        filtered.push(arr[i]) // phần tử được thoả điều kiện
      }
      // cbFn(arr[i], i, arr) && filtered.push(arr[i])
      // if (cbFn(arr[i], i, arr)) filtered.push(arr[i])
    }
    return filtered // mảng đã được lọc rồi
  }
}

StudentList.prototype.searchByFullname = function (str) {
  // cách 1: dùng mảng tạm + forEach
  // var searchedArr = [] // mảng tạm để lưu những kết quả tìm kiếm được
  // trim: cắt bỏ hết những khoảng trắng ở 2 đầu
  // toUpperCase hoặc là dùng toLowerCase ở đây là để quy giá trị gõ vào và giá trị muốn so sánh thành cùng một kiểu
  // var chuoiThuong = str.toLowerCase().trim()

  // this.array.forEach(function (stu) {
  //     var tenThuong = stu.fullname.toLowerCase()
  //     var strIdx = tenThuong.indexOf(chuoiThuong)

  //     if(~strIdx) searchedArr.push(stu)
  // })

  // return searchedArr

  // cách 2: filter + arrow function
  // return this.array.filter(stu => ~stu.fullname.toLowerCase().indexOf(str.toLowerCase().trim()))

  // cách 3: filter + function thường
  var cbFn = function (stu, idx, arr) {
    return ~stu.fullname.toLowerCase().indexOf(str.toLowerCase().trim())
  }
  var filtered = this.array.filter(cbFn)
  return filtered

  // cách 4: dùng reduce
  // return this.array.reduce(function (searchedArr, stu) {
  //   if(~stu.fullname.toLowerCase().indexOf(str.toLowerCase().trim())) searchedArr.push(stu)
  //   return searchedArr
  // }, [])

  // cách 5: dùng hàm filter của mình
  // return this.myFilter(this.array, function (stu) {
  //   return ~stu.fullname.toLowerCase().indexOf(str.toLowerCase().trim())
  // })
}

// Hảo --> 3116500009 !== 3116500070 --> đẩy vô arrayRemoved
// Thiện --> 3116500045 !== 3116500070 --> đẩy vô arrayRemoved
// Nhựt
// --> Kiên: 3116500070 --> điều kiện bị sai --> sẽ không đc đẩy vô mảng arrayRemoved
// Đức
 