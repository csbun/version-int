# version-int
parse a version string to int

## API

* [versionInt](#module_versionInt)
    * [.parse(versionStr, [digitLength])](#module_versionInt.parse) ⇒ <code>number</code>
    * [.setDigit([digitLength])](#module_versionInt.setDigit)

<a name="module_versionInt.parse"></a>

### versionInt.parse(versionStr, [digitLength]) ⇒ <code>number</code>
parse a version string into a number

**Kind**: static method of <code>[versionInt](#module_versionInt)</code>  
**Returns**: <code>number</code> - version number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| versionStr | <code>string</code> |  | version string |
| [digitLength] | <code>number</code> | <code>3</code> | how long each sub-version is |

**Example**  
```js
versionInt.parse('1.1.1');    // 1001001
versionInt.parse('1.1.1', 1); // 111
versionInt.parse('1.1.1', 2); // 10101
versionInt.parse('1.2.3456', 3); // 1001345
```
<a name="module_versionInt.setDigit"></a>

### versionInt.setDigit([digitLength])
set/update default digitLength

**Kind**: static method of <code>[versionInt](#module_versionInt)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [digitLength] | <code>number</code> | <code>3</code> | how long each sub-version is |

**Example**  
```js
versionInt.parse('1.1.1'); // 1001001
versionInt.setDigit(1);
versionInt.parse('1.1.1'); // 111
```
