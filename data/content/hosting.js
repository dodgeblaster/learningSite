const hosting = {
    ready: true,
    number: '30',
    name: 'Hosting',
    resources: (
        <div>
        <ul>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/aws1.mp4'>AWS Video 1</a></li>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/aws2.mp4'>AWS Video 2</a></li>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/aws3.mp4'>AWS Video 3</a></li>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/aws4.mp4'>AWS Video 4</a></li>
            <li><a href='http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html'>NS and SOA Records Documentation</a></li>

            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work'>MDN How the Internet Works</a></li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works'>MDN How the Web Works</a></li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server'>MDN What is a Web Server?</a></li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL'>MDN What is a URL</a></li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name'>MDN What is a Domain Name</a></li>
        </ul>
        <strong>Static Site Hosting Options</strong>

        <ul>
            <li>- AWS S3</li>
            <li>- Google Firebase Hosting</li>
            <li>- Zeit Now</li>
            <li>- Webhosting 4 Students (C Panel)</li>
            <li>- Github Pages</li>
        </ul>
        
        <br/>
        <strong>Site with Backend Hosting Options</strong>
        <ul>
            
            <li>- AWS EC2</li>
            <li>- Google Cloud Platform</li>
            <li>- Zeit Now</li>
            <li>- Digital Ocean</li>
            <li>- Heroku</li>
            <li>- Webhosting 4 Students (PHP)</li>
        </ul>
        </div>
    ),

}

const github = {
    ready: true,
    number: '29',
    name: 'Github',
    resources: (
        <div>
        <strong>Solo Development</strong>
        <ul>
            <li><a href='https://guides.github.com/introduction/git-handbook/'>What is Git?</a></li>
            <li><a href='https://guides.github.com/activities/hello-world/'>Github Basics</a></li>
            <li><a href='https://guides.github.com/features/issues/'>Using Github Issues as a productivity tool</a></li>
        </ul>
        <br/>

        <strong>Team Development</strong>
        <ul>
            <li><a href='https://guides.github.com/introduction/flow/'>Github Flow</a></li>
        </ul>
        <br/>


        <strong>KanBan Articles</strong>
        <ul>
            <li><a href='https://leankit.com/learn/kanban/what-is-kanban/'>What is the KanBan Strategy?</a></li>
            <li><a href='https://www.atlassian.com/agile/kanban'>Atlassian KanBan Article</a></li>
        </ul>
        <br/>

        <strong>Alternatives to Github Projects</strong>
        <ul>
            <li><a href='https://www.atlassian.com/software/jira'>JIRA</a></li>
            <li><a href='https://trello.com/'>Trello</a></li>
            <li><a href='https://www.pivotaltracker.com/'>Pivotal Tracker</a></li>
            <li><a href='https://about.gitlab.com/'>GitLab</a></li>
        </ul>



        </div>
    ),

}


export default {
    name: 'Deployment',
    color: '#3ECC94',
    chapters: [
        github,
        hosting
    ]
}
