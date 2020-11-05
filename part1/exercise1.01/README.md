Link to dockerhub image: https://hub.docker.com/repository/docker/juholehtimaki/date-app

Commands used to deploy the image in k3d:

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~</b></font>$ kubectl create deployment date-app --image=juholehtimaki/date-app:firsttry
deployment.apps/date-app created
</pre>

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~</b></font>$ kubectl get deployments
NAME       READY   UP-TO-DATE   AVAILABLE   AGE
date-app   1/1     1            1           15s
</pre>

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~</b></font>$ kubectl get pods
NAME                        READY   STATUS    RESTARTS   AGE
date-app-566c8bd749-w7rrs   1/1     Running   0          18s
</pre>
<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~</b></font>$ kubectl logs -f date-app-566c8bd749-w7rrs
2020-11-05T15:34:54.032Z
2020-11-05T15:34:59.037Z
2020-11-05T15:35:04.039Z
2020-11-05T15:35:09.040Z
2020-11-05T15:35:14.043Z
2020-11-05T15:35:19.048Z
2020-11-05T15:35:24.051Z
2020-11-05T15:35:29.055Z</pre>
