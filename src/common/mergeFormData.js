/**
 * Merget formData values
 * @param {FormData} form1 Form to merge to
 * @param {FormData} form2 Form to merge with
 */
export default function mergeFormData(form1, form2) {
  const entries = form2.entries();

  for (var pair of entries) {
    // form1.delete(pair[0]);
    form1.append(pair[0], pair[1]);
  }

  return form1;
}
