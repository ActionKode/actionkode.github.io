/* Supposing an array like */
$images = array(
    array('thumb' => 'thumb1url', 'full' => 'full1url'),
    array('thumb' => 'thumb2url', 'full' => 'full2url')
);

echo '<div id="thumbContainerMarie">'. "\r\n";
$id_num = 1;
foreach($images as $img)
{
    printf(
        '<a class="galleryLink" id="%s" onclick="%s"><img class="landscape" src="%s" width="100" alt="thumb" /></a>',
        'galLink'.$id_num,
        "putPic('".$img['full']. "');",
        $img['thumb']
    );
    echo "\r\n";
    $id_num++;
}
echo '</div>';
?>
    <script type="text/javascript">
        function putPic( url )
        {
            alert(url);
}
</script>