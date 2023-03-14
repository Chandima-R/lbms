export const getUserDefaultValues = ({ formFieldGroups }) => {
    const defaultValues = {};
    formFieldGroups.forEach((fieldGroup) => {
        fieldGroup.fields.forEach((field) => {
            if (field.dynamic) {
                defaultValues[field.name] = [{ value: field.defaultValue }];
            } else {
                defaultValues[field.name] = field.defaultValue;
                if (field?.type === 'subFieldGroup') {
                    field?.fields?.forEach((subField) => {
                        defaultValues[subField?.name] = subField?.defaultValue;
                    });
                }
                if (field?.selectName) {
                    defaultValues[field?.selectName] = field?.selectDefaultValue;
                }
            }
            if (field.zone) {
                defaultValues[field.zone.name] = field.zone.defaultValue;
            }
            if (field.currency) {
                defaultValues[field.currency.name] = field.currency.defaultValue;
            }
        });
    });

    return defaultValues;
};
